
class CommonUtils {
  stringIsEmpty = (str) => {
    return !str || /^\s*$/.test(str);
  };
  emailRegex = () => {
    return RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    );
  };
  phoneRegex = () => {
    return RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
  };

 

  checkVideoURL = (url) => {
    if (!url.search('http://') || !url.search('https://')) {
      return true;
    } else {
      return false;
    }
  };
}

export default new CommonUtils();
