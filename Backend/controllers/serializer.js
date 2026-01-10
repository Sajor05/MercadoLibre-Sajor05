export function handleFormData() {
    //Script del front, el back no entiende el document
    const form = document.getElementById("form-data");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        
        const textToArray = (text) => {
            return text ? text.split('\n').map(line => line.trim()).filter(line => line !== '') : [];
        };

        const newProductJSON = {
            images: textToArray(formData.get('images_list')),
            details: textToArray(formData.get('details_list')),
            
            seller: {
                name: formData.get('seller_name'),
                logo: formData.get("logo"),
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
            description: formData.get("description"),
            price: Number(formData.get('price'))
        };

        try {
            const response = await fetch("https://mercadolibre-sajor05.onrender.com/api/productsjson", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" // Importante para que Node entienda el JSON
                },
                body: JSON.stringify(newProductJSON)
            });

            if (response.ok) {
                console.log("¡Guardado con éxito!");
                form.reset();
            }else {
                console.error("Error del servidor:", response.status);
            }
        } catch (error) {
            console.error("Error al guardar:", error);

        }
    });    
}
