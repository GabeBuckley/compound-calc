/**
 * compound-calc
 * 
 * https://github.com/GabeBuckley/compound-calc
 */

class compoundCalc {

    containerElement;
    calcElement;

    constructor(strElementId) {
        // If we don't get an id
        if (!strElementId) {
            this.failToConsole('No element ID supplied. Correct syntax: new compoundCalc(\'your-element-id\');');
            return -1;
        }
        // If the id isn't a string
        if (typeof strElementId !== 'string') {
            this.failToConsole('Element ID must be a string.')
            return -1;
        }
        // If the id doesn't match an element in the HTML
        this.containerElement = document.querySelector('#' + strElementId);
        if (!this.containerElement) {
            this.failToConsole('Cannot locate an element with id: ' + strElementId);
            return -1;
        }

        this.instantiateLayout();
    }

    instantiateLayout() {
        this.containerElement.innerHTML = '';
        this.calcElement = document.createElement('div');
        this.calcElement.classList.add('calc-body');
        this.containerElement.appendChild(this.calcElement);

        const templateReq = new XMLHttpRequest();

        const _this = this;
        templateReq.addEventListener('load', function (result) {
            _this.calcElement.innerHTML = result.currentTarget.response;
        })
        templateReq.open('GET', './dist/_template.html');
        templateReq.send();

    }

    failToConsole(strMessage) {
        console.warn('COMPOUND-CALC: ' + strMessage);
    }
}