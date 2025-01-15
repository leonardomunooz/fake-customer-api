const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token : sessionStorage.getItem("token") || null,
			api_key : sessionStorage.getItem('apiKey') || null,
			products : []
		},
		actions: {
			register : async (user)  => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/user`, {
						method : "POST",
						headers : {
							"Content-Type": "application/json" 
						},
						body : JSON.stringify(user)
					})

					const data  = await response.json() 
					console.log(data)

					console.log(response)

					if (response.status === 201){
						return true
					}
					if(response.status === 400) {
						return false
					}
				
				} catch (error) {
					console.log(error);
					
				}
			},
			login : async (user) => {
				
				try {
					const response  = await fetch(`${process.env.BACKEND_URL}/api/login`, {
						method : "POST",
						headers : {
						"Content-Type" : "application/json"
						},
						body : JSON.stringify(user)
					})
					const data  = await response.json() 
					


					if(response.status == 200){
						setStore({
							token : data.token,
							api_key : data.api_key
						})

						sessionStorage.setItem('token', data.token)
						sessionStorage.setItem('apiKey', data.api_key)
						return true
					}else {
						return response.status
					}
				} catch (error) {
					console.log(error)
				}
			},
			logout : () => {
				setStore({
					token : null,
					api_key : null
				})
				sessionStorage.removeItem("token")
				sessionStorage.removeItem("apiKey")
			},
			registerProduct : async (product) => {
				try {
					const response  = await fetch(`${process.env.BACKEND_URL}/api/product`,{
						method : "POST",
						headers : {
							"Authorization" : `Bearer ${getStore().token}`
						},
						body : product
					})

					console.log(response)
					return response.ok				
				} catch (error) {
					console.log(error)
				}
			},
			getProducts: async () => {

				// const token = getStore().token
				const apiKey = getStore().api_key
				try {
					const response  = await fetch(`${process.env.BACKEND_URL}/api/products`,{
						method : "GET",
						headers : {
							"x-api-key" : apiKey
						}
					})
					const body = await response.json()
					

					if(response.ok) {
						setStore({
							products : [...body]
						})
					}
					
				}catch(error) {
					console.log(error)
				}
			},
			resetPassword : async (email) => {
				try {
					const response =  await fetch(`${process.env.BACKEND_URL}/api/reset-password`,
						{
							method : "POST",
							headers	: {
								"Content-Type": "application/json"
							},
							body : JSON.stringify(email)
						}
					)
					
					return response.ok
					
				}catch(error) {
					console.log(error)
				}
			},
			updatePassword : async (tokenUpdate, newPass) => {
				try{
					const response = await fetch (`${process.env.BACKEND_URL}/api/update-password`,{
						method : "PUT",
						headers : {
							"Authorization" : `Bearer ${tokenUpdate}`,
							"Content-Type" : "application/json"
						},
						body : JSON.stringify(newPass)
					})

					console.log(response);
					
					return response.status
					
				}catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
