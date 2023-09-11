function elementor(selector) {
    const element = document.querySelector(selector);

    if (!element) {
        throw new Error('Element not found');
    }
    const action = {

        setAttribute(key, value) {
            element.setAttribute(key, value);
            return action;
        },
        on(eventName, handler) {
            element.addEventListener(eventName, handler);
            return action;
        },
        click(handler) {
            element.addEventListener('click', handler);
            return action;
        },
        text(content) {
            element.textContent = content;
            return action;
        },
        class(className) {
            if (Array.isArray(className)) {
                element.classList.add(...className);
            } else {
                element.classList.add(className);
            }
            return action;
        },
        removeClass(className) {
            element.classList.removeClass(className);
            return action;
        }

    };
    return action;
}






function render(element) {
    if (!element || typeof element !== 'object' || !element.name) {
        return '';
    }
    const { name, attribute = [], children = [] } = element;
    const attributeString = attribute
        .map(attr => `${attr, key}="${attr.value}"`)
        .join(' ');

    const childElement = children.map(child => {
        if (typeof child === 'string') {
            return child;
        } else {
            return render(child);
        }
    }).join('\n');
    return `<${name} ${attributeString}>
    ${childElement}
    </${name}>`;
}




function generateForm(inputs) {
    const form = document.createElement('form');

    for (const input of inputs) {
        const label = document.createElement('label');
        label.textContent = input.label;
        label.setAttribute('for', input.id);

        let inputElement;
        if (input.type === 'text') {
            inputElement = document.createElement('input');
            inputElement.type = input.inputType || 'text';
            inputElement.placeholder = input.placeholder || '';
            inputElement.id = input.id;
        } else if (input.type === 'chekcbox') {
            inputElement = document.createElement('input');
            inputElement.type = 'checkbox';
            inputElement.id = input.id;
        } else if (input.type === 'select') {
            inputElement = document.createElement('select');
            inputElement.id = input.id;

            for (const option of input.option || []) {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.label;
                inputElement.appendChild(optionElement);
            }
        }
        form.appendChild(label);
        form.appendChild(inputElement);
    }
    document.body.appendChild(form);
}
