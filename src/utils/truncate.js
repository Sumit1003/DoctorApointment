export const truncate = (str, max) =>{
    console.log({str})
    return str!=null &&( str.length > max ? str.substring(0, max-1) + '...' : str);
}