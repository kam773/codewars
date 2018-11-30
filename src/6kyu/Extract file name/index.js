class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        return dirtyFileName.match(/[^\d][\w_-]+\.[\w]+/)[0].slice(1);
    }
}