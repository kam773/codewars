function add(x, y) {
    return y ? add(x^y, (x&y) << 1) : x;
}