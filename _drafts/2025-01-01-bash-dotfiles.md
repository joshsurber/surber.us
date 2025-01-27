---
title: Dotfiles | bash config
summary: My dotfiles on Github contain a few clever bits that I find worthy of mention
image: images/bashfiles.jpg
imageAlt: bash configuration on a screen with the Linux penguin sitting next to it
---

I have had [my dotfiles](https://github.com/joshsurber/.files) on Github for a while now, but have been really messing with them lately. They contain a few really clever bits that I thought were worth going over. This will be a series, where I go over various sections of my dotfiles, with a highlight on anything that I find to be exceptionally useful, something I haven't seen very often, or anything I created myself and find myself quite proud of. Here are some of my favorite things from my [bash config](https://github.com/joshsurber/.files/blob/master/bash/.bash/).

Jump to [aliases](#aliases),
[env](#env),
[functions](#functions),
[logout](#logout),
[profile](#profile),
[source](#source)

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

These lines are not in the repo, but are my default bash configs in my home directory. I don't really make changes to the default configs; my [install scripts](/blog/2024/12/dotfiles/) add in a line to each to pull in my custom configs. I store my custom configs in `~/.bash/`, which helps me keep them organized while being less clutter in my home directory. This is split into separate files, as seen below. The only time I personally customize these files is to add in sensitive API keys, which I use in other scripts I'll cover later in this series.


```bash
cd ~/.bash && ls
aliases   env   functions   logout   profile   source
```

I'll run through all the files, highlighting the things I find the most useful.

<h3 id="aliases">Aliases</h3>

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
alias mkdir='mkdir -p'
alias rbash='source ~/.bashrc' # Reload bashrc easily
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

This came from a book (Learning the bash Shell by O'Reilly, I believe). It simply shows the ten largest items in the current directory, even if they are subdirectories. Easily the cutest command name in my system.

```bash
ccopy() { for i in $*; do cp -a $i /tmp/ccopy.$i; done }
alias cpaste="ls -d /tmp/ccopy* | sed 's|[^\.]*.\.||' | xargs -I % mv /tmp/ccopy.% ./%"
```

Copy and paste files to move around. I believe this came from the same book. You would `ccopy` a file, move to the directory you want it in, then `cpaste` and the file will be moved there. Easier than navigating directory hierarchies in the middle of a command.

```bash
# SHORT GIT ALIASES (using same mnemonics from nvim)
alias gg='git status'
alias gc='git commit'
alias gd='git diff'
alias gp='git push'
alias gs='git add' # git stage
alias ga='git add'
alias lg='lazygit'
```

Some easier ways to use git. I have similar keys set up in neovim (which will be covered later in this series, or possibly in its own series) such as `<leader>gc` to commit changes.

```bash
# MOVE AROUND
alias back='cd -'
alias cdvi='cd ~/.config/nvim/'
alias ..='cd ..'
alias ...='cd ../..'
```

```bash
# LS ALIASES
alias cls="clear;ls"
alias exa='exa --icons --color=always --group-directories-first'
alias ll='ls -l'
alias la='ls -a'
alias lla='ls -la'
```

```bash
# WEB DEV ALIASES
# alias serve='browser-sync start --server --files . > /dev/null '
alias serve=live-server
alias lamp='sudo /opt/lampp/lampp'
alias cinew="composer create-project codeigniter4/appstarter"
alias cisrv="php spark serve"
```

These are ways for me to do things I need often for web dev. `serve` will open an auto-reloading server for the current directory, `lamp` is the control for [XAMPP](https://www.apachefriends.org/), which is how I test out any Wordpress sites I'm working on, and the CI items are for working with CodeIgniter projects.

```bash
alias drive='rclone mount drive: ~/Google --daemon'
```

If rclone is installed, this mounts my Google Drive on the ~/Google mountpoint. This will then be available anywhere, such as file choosers or any commands I would run in any other folder on my computer. I briefly toyed with just doing this on login, but don't always need Drive to be connected and it would add a huge overhead to signing in, defeating the purpose of a minimal distro. This was set up in my [install scripts](/blog/2024/12/dotfiles/).

```bash
# QUICKFIX COMMON MISTAKES
alias fuck='sudo $(history -p \!\!)'   # As in "fuck, I forgot to sudo that command!"
alias moar='$(history -p \!\!) | less' # Run the last command through more (actually less)
```

Run a command and get an error that it must be run as root? Running `fuck` right after will `sudo` the last command. I first saw this on Twitter before I left when Nazis took over the platform. `moar` was my take on doing something similar, but piping the command through `less` if it produced an unuseable amount of output.

```bash
# PACMAN UTILS
alias unlock='sudo rm /var/lib/pacman/db.lck'    # remove pacman lock
alias cleanup='sudo pacman -Rns $(pacman -Qtdq)' # remove orphaned packages
```

Tidy up pacman issues.

```bash
# # These switch keyboard layouts
# # I've disabled as I created scripts for this that can be called from dmenu etc
# alias asdf="echo 'Using Colemak';setxkbmap us -variant colemak;setxkbmap -option caps:escape"
# alias arst="echo 'Using QWERTY';setxkbmap us;setxkbmap -option caps:escape"
# alias aprg="echo 'Using QWERTY';setxkbmap us;setxkbmap -option caps:escape"
```

I use the Colemak keyboard layout. On my minimal keyboard, the keys are set this way automatically, but on my laptop I have to edit the keyboard layout. By hitting the homerow keys on my left hand, I can both check if I am in Colemak, and change the layout the computer is needing. The third option is weird, for the edge case where I am using Colemak on both the computer and the keyboard itself. These have saved me a lot of headaches over the past year or so. Also maps caps lock to escape.

<h3 id="env">Enviroment</h3>

```bash
#!/bin/bash
# This sets up my bash environment

# BASH OPTIONS
export HISTIGNORE="&:[ \t]*:ls:[bf]g:exit"
bind "set completion-ignore-case on" # case insensitive tab completion
set -o vi
set -o noclobber    # don't overwrite files
shopt -s autocd     # change to named dir
shopt -s cdspell    # autocorrect cd misspellings
shopt -s dotglob    # include dotfiles in globbing
shopt -s histappend # don't overwrite history
shopt -s extglob
PROMPT_COMMAND='history -a'
```

Set up some options for bash based on my preferred usage, which includes using vi bindings.

<h3 id="functions">Functions</h3>

These will not link full source on everything, just give an example of what the function does. For more, see [the original repo](https://github.com/joshsurber/.files).

```bash
# CREATE A DIRECTORY AND CD INTO IT
mkcd() {
    mkdir -p "$*"
    cd "$*"
}
```

Create a directory and cd into it. Works with entire hierarchies that don't exist. I came up with this on my own but it's rather obvious so I'm pretty sure I'm not the first to write this.


```bash
# CLONE A GIT REPO. WILL SSH MY PERSONAL, AND HTTPS OTHER REPOS
clone() {
    if [[ $* == */* ]]; then
        git clone https://github.com/$*.git;
    else
        git clone git@github.com:joshsurber/$*.git;
    fi
}
```

Clone a git repo intellegently. If I pass in a single repo name (like `.files`) it will use SSH to clone that repo from my account so I can push changes. If I pass the username as well (such as `echasnovski/mini.nvim`) it will be cloned via HTTPS, not allowing changes. Seems obvious but I've never seen this in anyone else's dotfiles before. Will not work with GitLab or BitBucket or anything other than GitHub, but if you need this feel free to customize in your own dotfiles.

```bash
# Load static pws in yubibey call ykey [slot] [password]
ykey() { echo ykman otp static --keyboard-layout=us $*; }

# CASE-INSENSITIVE FILTERED HISTORY COMMAND.
hist() {
    # [ CODE NOT SHOWN FOR BREVITY ... ]
}
```

Case-insensitive filtered history command. Call `hist foo` to see all calls to foo. Using multiple arguments all will filter by each one individually. Not my code, but original reference has been lost over the years.

```bash
cb() {
    # [ CODE NOT SHOWN FOR BREVITY ... ]
}
alias cb_ssh="cb ~/.ssh/id*.pub"
```

Copy a file or string from STDIN to the clipboard; with a convienance function to copy a SSH public key. Don't know where I got this originally.

```bash
# Easily extract compressed files
ex() {
    if [ -f "$1" ]; then
        case $1 in
        *.tar.bz2) tar xjf $1 ;;
        *.tar.gz) tar xzf $1 ;;
        # [ CODE NOT SHOWN FOR BREVITY ... ]
        esac
    else
        echo "'$1' is not a valid file"
    fi
}
```

Everyone has the function to extract compressed files easily. I think this was originally written by cavemen.

```bash
# Move up $ARGS directories (default 1)
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

Navigate up the file tree. Pass a number to go that many directories up. From `/one/two/three/four/five`, running `up 2` will leave you at `/one/two/three`
