---
title: Dotfiles | bash config
summary: My dotfiles on Github contain a few clever bits that I find worthy of mention
image: images/bashfiles.jpg
imageAlt: bash configuration on a screen with the Linux penguin sitting next to it
---

I have had [my dotfiles](https://github.com/joshsurber/.files) on Github for a while now, but have been really messing with them lately. They contain a few really clever bits that I thought were worth going over. This will be a series, where I go over various sections of my dotfiles, with a highlight on anything that I find to be exceptionally useful, something I haven't seen very often, or anything I created myself and find myself quite proud of. Here are some of my favorite things from my [bash config](https://github.com/joshsurber/.files/blob/master/bash/.bash/).

```bash
#! /bin/bash
# ~/.profile

# ... system default .profile ...

export SENSITIVE_API_KEYS=3.14159265
source ~/.bash/profile
```

```bash
#! /bin/bash
# ~/.bashrc

# ... system default .bashrc ...

source ~/.bash/source
```

```bash
#! /bin/bash
# ~/.bash_logout

# ... system default .bash_logout ...

source ~/.bash/logout
```

These lines are not in the repo, but are my default bash configs in my home directory. I don't really make changes to the default configs; my [install scripts](http://localhost:8080/blog/2024/12/dotfiles/) add in a line to each to pull in my custom configs. I store my custom configs in `~/.bash/`, which helps me keep them organized while being less clutter in my home directory. This is split into separate files, as seen below. The only time I personally customize these files is to add in sensitive API keys, which I use in other scripts I'll cover later in this series.


```bash
cd ~/.bash && ls
aliases   env   functions   logout   profile   source
```

I'll run through all the files, highlighting the things I find the most useful.

## Aliases

```bash
#!/bin/bash
# TYPING SAVERS
alias bv='back&&vi'
alias f='find'
alias o='open'
alias v='vi'
alias v.='v .'

alias vi=$EDITOR
alias more='less' # less is more
alias open='xdg-open'
alias mutt='neomutt'
```

Here are some simple things that save me a couple of keys every time I run frequent commands.

```bash
[[ -x "$(command -v fd)" ]]     && alias find='fd'
[[ -x "$(command -v fdfind)" ]] && alias find='fdfind'

[[ -x "$(command -v bat)" ]]    && alias cat='bat'
[[ -x "$(command -v batcat)" ]] && alias cat='batcat'

[[ -x "$(command -v rg)" ]]     && alias grep='rg'
[[ -x "$(command -v exa)" ]]    && alias ls='exa'

[[ -x "$(command -v apt)" ]]    && alias i='sudo apt install'
[[ -x "$(command -v pacman)" ]] && alias i='sudo pacman -S'

```

I alias some built-ins to better alternatives, but only if those alternatives are available. `fd` and `bat` have different names on Arch and Debian distros, so I work around that here too.

```bash
[[ $TERM == 'xterm-kitty' ]]    && alias theme='kitty +kitten themes'
[[ $TERM == 'xterm-kitty' ]]    && alias ssh='kitty +kitten ssh'
```

A few kittens (plugins) for my terminal.

```bash
alias ducks='du -cks *|sort -rn|head -11'
```

I love this. It finds the top ten largest items in a directory.

```bash
ccopy() { for i in $*; do cp -a $i /tmp/ccopy.$i; done }
alias cpaste="ls -d /tmp/ccopy* | sed 's|[^\.]*.\.||' | xargs -I % mv /tmp/ccopy.% ./%"

# SHORT GIT ALIASES (using same mnemonics from nvim)
alias gg='git status'
alias gc='git commit'
alias gd='git diff'
alias gp='git push'
alias gs='git add' # git stage
alias ga='git add'
alias lg='lazygit'

# MOVE AROUND
alias back='cd -'
alias cdvi='cd ~/.config/nvim/'
alias ..='cd ..'
alias ...='cd ../..'

# GUARD RAILS
# alias rm='rm -i'
# alias mv='mv -i'
# alias cp='cp -i'
# alias ln='ln -i'
alias mkdir='mkdir -p'

# LS ALIASES
alias cls="clear;ls"
alias exa='exa --icons --color=always --group-directories-first'
alias ll='ls -l'
alias la='ls -a'
alias lla='ls -la'

# WEB DEV ALIASES
# alias serve='browser-sync start --server --files . > /dev/null '
alias serve=live-server
alias lamp='sudo /opt/lampp/lampp'
alias cinew="composer create-project codeigniter4/appstarter"
alias cisrv="php spark serve"

alias drive='rclone mount drive: ~/Google --daemon'
alias rbash='source ~/.bashrc'

# QUICKFIX COMMON MISTAKES
alias fuck='sudo $(history -p \!\!)'   # As in "fuck, I forgot to sudo that command!"
alias moar='$(history -p \!\!) | less' # Run the last command through more (actually less)

# PACMAN UTILS
alias unlock='sudo rm /var/lib/pacman/db.lck'    # remove pacman lock
alias cleanup='sudo pacman -Rns $(pacman -Qtdq)' # remove orphaned packages

# # These switch keyboard layouts
# # I've disabled as I created scripts for this that can be called from dmenu etc
# alias asdf="echo 'Using Colemak';setxkbmap us -variant colemak;setxkbmap -option caps:escape"
# alias arst="echo 'Using QWERTY';setxkbmap us;setxkbmap -option caps:escape"
# alias aprg="echo 'Using QWERTY';setxkbmap us;setxkbmap -option caps:escape"
```


This came from a book (Learning the bash Shell by O'Reilly, I believe). It simply shows the ten largest items in the current directory, even if they are subdirectories.
``` bash
alias ducks='du -cks *|sort -rn|head -11'

```

If rclone is installed, this mounts my Google Drive on the ~/Google mountpoint. This will then be available anywhere, such as file choosers or any commands I would run in any other folder on my computer. I briefly toyed with just doing this on login, but don't always need Drive to be connected and it would add a huge overhead to signing in, defeating the purpose of a minimal distro.
```bash
alias drive='rclone mount drive: ~/Google --daemon'
```

Run a command and get an error that it must be run as root? Running `fuck` right after will `sudo` the last command. I first saw this on Twitter before I left when Nazis took over the platform.
```bash
alias fuck='sudo $(history -p \!\!)'
# As in "fuck, I forgot to sudo that command!"

```

I use the Colemak keyboard layout. On my minimal keyboard, the keys are set this way automatically, but on my laptop I have to edit the keyboard layout. By hitting the homerow keys on my left hand, I can both check if I am in Colemak, and change the layout the computer is needing. The third option is weird, for the edge case where I am using Colemak on both the computer and the keyboard itself. These have saved me a lot of headaches over the past year or so. Also maps caps lock to escape.
```bash
alias asdf="echo 'Using Colemak';setxkbmap us -variant colemak;setxkbmap -option caps:escape"
alias arst="echo 'Using QWERTY';setxkbmap us;setxkbmap -option caps:escape"
alias aprg="echo 'Using QWERTY';setxkbmap us;setxkbmap -option caps:escape"
```

Create a directory and cd into it. Works with entire hierarchies that don't exist. I came up with this on my own but it's rather obvious so I'm pretty sure it's not original.
``` bash
mkcd() {
    mkdir -p "$*"
    cd "$*"
}
```

Clone a git repo intellegently. If I pass in a single repo name (like `.files`) it will use SSH to clone that repo from my account so I push changes. If I pass the username as well (such as `echasnovski/mini.nvim`) it will be cloned via HTTPS, not allowing changes. Seems obvious but I've never seen this in anyone else's dotfiles before.
```bash
# Clone a git repo. Will ssh my personal, and https other repos
clone() {
    if [[ $* == */* ]]; then
        git clone https://github.com/$*.git;
    else
        git clone git@github.com:joshsurber/$*.git;
    fi
}
```

Case-insensitive filtered history command. Call `hist foo` to see all calls to foo. Using multiple arguments all will filter by each one individually.
```bash
hist() {
    # "hist" ==> "history"
    # "hist foo" ==> "history | grep -i foo"
    # "hist foo bar" ==> "history | grep -i foo | grep -i bar"
    # etc.
    # Note that quotes are ignored, e.g.
    #   <<<hist "foo bar">>> is equivalent to <<<hist foo bar>>>
    HISTORYCMD="history $@"             # "foo bar" ==> "history foo bar"
    HISTORYCMD="${HISTORYCMD% }"        # "history " ==> "history" (no trailing space)
    eval "${HISTORYCMD// / | grep -i }" # "history foo bar" ==>
    #   "history | grep -i foo | grep -i bar"
}
```

Copy the file passed or the contents of STDIN to the clipboard. Requires xclip. The cb_ssh copies your public key to the clipboard.
```bash
cb() {
    # - Accepts input from either stdin (pipe), or params.
    # - If the input is a filename that exists, then it
    #   uses the contents of that file.
    # ------------------------------------------------
    local _scs_col="\e[0;32m"
    local _wrn_col='\e[1;31m'
    local _trn_col='\e[0;33m'
    # Check that xclip is installed.
    if ! type xclip >/dev/null 2>&1; then
        echo -e "$_wrn_col""You must have the 'xclip' program installed.\e[0m"
        # Check user is not root (root doesn't have access to user xorg server)
    elif [[ "$USER" == "root" ]]; then
        echo -e "$_wrn_col""Must be regular user (not root) to copy a file to the clipboard.\e[0m"
    else
        # If no tty, data should be available on stdin
        if ! [[ "$(tty)" == /dev/* ]]; then
            input="$(</dev/stdin)"
            # Else, fetch input from params
        else
            input="$*"
        fi
        if [ -z "$input" ]; then # If no input, print usage message.
            echo "Copies a string or the contents of a file to the clipboard."
            echo "Usage: cb <string or file>"
            echo "       echo <string or file> | cb"
        else
            # If the input is a filename that exists, then use the contents of that file.
            if [ -e "$input" ]; then input="$(cat $input)"; fi
            # Copy input to clipboard
            echo -n "$input" | xclip -selection c
            # Truncate text for status
            if [ ${#input} -gt 80 ]; then input="$(echo $input | cut -c1-80)$_trn_col...\e[0m"; fi
            # Print status.
            echo -e "$_scs_col""Copied to clipboard:\e[0m $input"
        fi
    fi
}
alias cb_ssh="cb ~/.ssh/id*.pub"
```

Navigate up the file tree. Pass a number to go that many directories up.
```bash
up() {
    local d=""
    local limit="$1"

    # Default to limit of 1
    if [ -z "$limit" ] || [ "$limit" -le 0 ]; then
        limit=1
    fi

    for ((i = 1; i <= limit; i++)); do
        d="../$d"
    done

    # perform cd. Show error if cd fails
    if ! cd "$d"; then
        echo "Couldn't go up $limit dirs."
    fi
}
```
