const mobileData = {
    apple: {
        models: {
            'iPhone 13': {
                features: '5G, Dual-camera system, A15 Bionic chip',
                rate: '$799',
                color: 'Blue, Pink, Midnight, Starlight, (PRODUCT)RED',
                image: 'https://cdn.pixabay.com/photo/2021/12/08/19/28/iphone-13-6856540_1280.jpg'
            },
            'iPhone 12': {
                features: '5G, Dual-camera system, A14 Bionic chip',
                rate: '$699',
                color: 'Blue, Green, Red, White, Black',
                image: 'https://tse2.mm.bing.net/th?id=OIP.S642417bsPNe4H3JaLDG2QHaGl&pid=Api&P=0&h=220'
            }
        }
    },
    samsung: {
        models: {
            'Galaxy S21': {
                features: '5G, Triple-camera system, Exynos 2100',
                rate: '$799',
                color: 'Phantom Gray, Phantom White, Phantom Violet, Phantom Pink',
                image: 'https://via.placeholder.com/200?text=Galaxy+S21'
            },
            'Galaxy Note 20': {
                features: '5G, Triple-camera system, Snapdragon 865+',
                rate: '$999',
                color: 'Mystic Bronze, Mystic Green, Mystic Gray',
                image: 'https://via.placeholder.com/200?text=Galaxy+Note+20'
            }
        }
    },
    oneplus: {
        models: {
            'OnePlus 9': {
                features: '5G, Triple-camera system, Snapdragon 888',
                rate: '$729',
                color: 'Winter Mist, Arctic Sky, Astral Black',
                image: 'https://via.placeholder.com/200?text=OnePlus+9'
            },
            'OnePlus 8T': {
                features: '5G, Quad-camera system, Snapdragon 865',
                rate: '$599',
                color: 'Aquamarine Green, Lunar Silver',
                image: 'https://via.placeholder.com/200?text=OnePlus+8T'
            }
        }
    }
};

function populateModels() {
    const companySelect = document.getElementById('company');
    const modelSelect = document.getElementById('model');
    const selectedCompany = companySelect.value;

    modelSelect.innerHTML = '<option value="">--Select Model--</option>';
    if (selectedCompany) {
        const models = mobileData[selectedCompany].models;
        for (const model in models) {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        }
    }
}

function showDetails() {
    const companySelect = document.getElementById('company');
    const modelSelect = document.getElementById('model');
    const detailsDiv = document.getElementById('details');
    const selectedCompany = companySelect.value;
    const selectedModel = modelSelect.value;

    if (selectedCompany && selectedModel) {
        const modelData = mobileData[selectedCompany].models[selectedModel];
        detailsDiv.innerHTML = `
            <img src="${modelData.image}" alt="${selectedModel}">
            <p><strong>Features:</strong> ${modelData.features}</p>
            <p><strong>Rate:</strong> ${modelData.rate}</p>
            <p><strong>Color:</strong> ${modelData.color}</p>
        `;
    } else {
        detailsDiv.innerHTML = '';
    }
}
