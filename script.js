const mobileData = {
    apple: {
        models: {
            'iPhone 13': {
                features: '5G, Dual-camera system, A15 Bionic chip',
                rate: 'Rs400000',
                color: 'Blue, Pink, Midnight, Starlight, (PRODUCT)RED',
                image: 'Images/iphone-13-6856540_1280.jpg'
            },
            'iPhone 12': {
                features: '5G, Dual-camera system, A14 Bionic chip',
                rate: 'Rs350000',
                color: 'Blue, Green, Red, White, Black',
                image: 'Images/iphone 12.jpeg'
            }
        }
    },
    samsung: {
        models: {
            'Galaxy S21': {
                features: '5G, Triple-camera system, Exynos 2100',
                rate: 'Rs170000',
                color: 'Phantom Gray, Phantom White, Phantom Violet, Phantom Pink',
                image: 'Images/Galaxy S21.jpeg'
            },
            'Galaxy Note 20': {
                features: '5G, Triple-camera system, Snapdragon 865+',
                rate: 'Rs180000',
                color: 'Mystic Bronze, Mystic Green, Mystic Gray',
                image: 'Images/Galaxy-S20_S20_S20_Ultra_5G_full_rgb.png'
            }
        }
    },
    oneplus: {
        models: {
            'OnePlus 9': {
                features: '5G, Triple-camera system, Snapdragon 888',
                rate: '$729',
                color: 'Winter Mist, Arctic Sky, Astral Black',
                image: 'Images/Oneplus 9.jpeg'
            },
            'OnePlus 8T': {
                features: '5G, Quad-camera system, Snapdragon 865',
                rate: '$599',
                color: 'Aquamarine Green, Lunar Silver',
                image: 'Images/Oneplus 8T.jpg'
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
