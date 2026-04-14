import moment from 'moment';

export function getPostDate(post) {
    if (post.data.date) return new Date(post.data.date);
    // Extract date from ID: YYYY-MM-DD-filename.md
    const dateStr = post.id.slice(0, 10);
    return new Date(dateStr);
}

export function toUTCString(date, fmt = "dddd, D MMMM YYYY") {
    return moment.utc(date).format(fmt);
}

export function getPostUrl(post) {
    const date = getPostDate(post);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    // Filename without date and without .md
    const slug = post.id.slice(11).replace(/\.md$/, '');
    return `/blog/${year}/${month}/${slug}/`;
}

export function getProjectUrl(project) {
    const slug = project.id.replace(/\.md$/, '');
    return `/portfolio/${slug}/`;
}

export function getExcerpt(post, len = 200) {
    if (post.data.summary) return post.data.summary;
    // Simple markdown/html stripping
    const content = post.body.replace(/(<([^>]+)>)/gi, "").replace(/[#*`]/g, "");
    if (content.length <= len) return content;
    return content.substr(0, content.lastIndexOf(" ", len)) + "...";
}

export function imgUrl(url) {
    if (!url) return '';
    if (url.startsWith('http') || url.startsWith('//') || url.startsWith('/')) return url;
    return '/' + url;
}
