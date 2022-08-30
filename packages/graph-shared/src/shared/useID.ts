const useID = (len: number = 8) => {
    let idStr = Date.now().toString(36);
    idStr += Math.random().toString(36).substr(2, length);
    return idStr;
};

export default useID;
