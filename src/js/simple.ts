export default () => {
    let element = document.createElement('p');
    element.innerHTML = ['Hello', 'world!'].join(' ');
    return element;
}
