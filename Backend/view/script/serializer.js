import axios from "axios"

const form = document.getElementById("form-data");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    const textToArray = (text) => {
        return text ? text.split('\n').map(line => line.trim()).filter(line => line !== '') : [];
    };

    const newProductJSON = {
        id: Number(formData.get('id')),
        
        images: textToArray(formData.get('images_list')),
        details: textToArray(formData.get('details_list')),
        
        seller: {
            name: formData.get('seller_name'),
            mlSeller: {
                isMLSeller: formData.get('seller_isML') === 'true',
                followersCount: Number(formData.get('seller_followers')) || 0,
                productsCount: Number(formData.get('seller_products')) || 0
            },
            sellCount: Number(formData.get('seller_count')),
            billType: formData.get('seller_bill')
        },
        
        category: {
            principalCategory: formData.get('cat_principal'),
            subCategory: formData.get('cat_sub')
        },
        
        isOffer: formData.get('isOffer') === 'true',
        offer: Number(formData.get('offer')),
        
        cuotes: Number(formData.get('cuotes')) || 0,
        
        stockCount: Number(formData.get('stockCount')),
        title: formData.get('title'),
        price: Number(formData.get('price'))
    };

    console.log("Enviando JSON:", JSON.stringify(newProductJSON, null, 2));

    try {
        await axios.post("http://localhost:4000/api/productsjson", newProductJSON);
        form.reset();
    } catch (error) {
        console.error("Error al guardar:", error);
    }
});