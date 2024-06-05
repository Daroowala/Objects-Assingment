// const mobileData = {
//     apple: {
//         models: {
//             'iPhone 13': {
//                 features: '5G, Dual-camera system, A15 Bionic chip',
//                 rate: 'Rs400000',
//                 color: 'Blue, Pink, Midnight, Starlight, (PRODUCT)RED',
//                 image: 'Images/iphone-13-6856540_1280.jpg'
//             },
//             'iPhone 12': {
//                 features: '5G, Dual-camera system, A14 Bionic chip',
//                 rate: 'Rs350000',
//                 color: 'Blue, Green, Red, White, Black',
//                 image: 'Images/iphone 12.jpeg'
//             }
//         }
//     },
//     samsung: {
//         models: {
//             'Galaxy S21': {
//                 features: '5G, Triple-camera system, Exynos 2100',
//                 rate: 'Rs170000',
//                 color: 'Phantom Gray, Phantom White, Phantom Violet, Phantom Pink',
//                 image: 'Images/Galaxy S21.jpeg'
//             },
//             'Galaxy Note 20': {
//                 features: '5G, Triple-camera system, Snapdragon 865+',
//                 rate: 'Rs180000',
//                 color: 'Mystic Bronze, Mystic Green, Mystic Gray',
//                 image: 'Images/Galaxy-S20_S20_S20_Ultra_5G_full_rgb.png'
//             }
//         }
//     },
//     oneplus: {
//         models: {
//             'OnePlus 9': {
//                 features: '5G, Triple-camera system, Snapdragon 888',
//                 rate: 'Rs60000',
//                 color: 'Winter Mist, Arctic Sky, Astral Black',
//                 image: 'Images/Oneplus 9.jpeg'
//             },
//             'OnePlus 8T': {
//                 features: '5G, Quad-camera system, Snapdragon 865',
//                 rate: 'R65000',
//                 color: 'Aquamarine Green, Lunar Silver',
//                 image: 'Images/Oneplus 8T.jpg'
//             }
//         }
//     },
//     oppo: {
//         models: {
//                  'Oppo R21': {
//                         features: 'OPPO R21 Pro 5G,Snapdragon 888,108MP Camera,12GB RAM,6000mAh Battery/OPPO R21 Pro',
//                         rate: 'Rs120000',
//                         color: 'Sea Green, Sky Blue',
//                         image: 'Images/oppo-R21 Pro.jpg'
//                     },
//                     'Oppo A9': {
//                         features: 'The camera set-up on the phone includes a four rear camera of 48 MP + 8 MP  + 2 MP + 2 , Non-removable Li-Po 5000 mAh battery',
//                         rate: 'Rs60000',
//                         color: 'Green Amazone',
//                         image: 'Images/oppo-A9.jpg'
//                 }
//             }
//         },
//         }

// function populateModels() {
//     const companySelect = document.getElementById('company');
//     const modelSelect = document.getElementById('model');
//     const selectedCompany = companySelect.value;

//     modelSelect.innerHTML = '<option value="">--Select Model--</option>';
//     if (selectedCompany) {
//         const models = mobileData[selectedCompany].models;
//         for (const model in models) {
//             const option = document.createElement('option');
//             option.value = model;
//             option.textContent = model;
//             modelSelect.appendChild(option);
//         }
//     }
// }


// function showDetails() {
//     const companySelect = document.getElementById('company');
//     const modelSelect = document.getElementById('model');
//     const detailsDiv = document.getElementById('details');
//     const selectedCompany = companySelect.value;
//     const selectedModel = modelSelect.value;

//     if (selectedCompany && selectedModel) {
//         const modelData = mobileData[selectedCompany].models[selectedModel];
//         detailsDiv.innerHTML = `
//             <img src="${modelData.image}" alt="${selectedModel}">
//             <p><strong>Features:</strong> ${modelData.features}</p>
//             <p><strong>Rate:</strong> ${modelData.rate}</p>
//             <p><strong>Color:</strong> ${modelData.color}</p>
//         `;
//     } else {
//         detailsDiv.innerHTML = '';
//     }
// }

function showModels() {
    document.getElementById('models').style.display = 'block';
}

function showDetails() {
    const modelSelect = document.getElementById('model-select');
    const modelDetails = document.getElementById('model-details');
    const selectedModel = modelSelect.value;

    let details = '';

    switch (selectedModel) {
        case 'model1':
            details = '<h2>iphone 12</h2><h3>Featurs:</h3><p>5G, Dual-camera system, A13 Bionic chip </p><h3>Rates:</h3><p>Rs: 350000/-</p><h3>Colors:</h3><p>Blue, Green, Red, White, Black</p>'

            break;
        case 'model2':
            details = '<h3>Model 2 Details</h3><p>This is the detail of Model 2.</p>';
            break;
        default:
            details = '';
    }

    modelDetails.innerHTML = details;
    modelDetails.style.display = details ? 'block' : 'none';
}
