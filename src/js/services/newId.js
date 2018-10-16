let lastId = 0;

export default function(prefix='Item') {
    lastId++;
    return `${prefix}${lastId}`;
}