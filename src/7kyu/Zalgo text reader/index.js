function readZalgo(zalgotext) {
    zalgotext = zalgotext.replace(/[^a-zA-Z0-9\s+,?!.]/g, '');
    return zalgotext;
}