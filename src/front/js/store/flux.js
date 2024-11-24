const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token : sessionStorage.getItem("token",) || null
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
					console.log(data)


					if(response.status == 200){
						setStore({
							token : data.token
						})
						sessionStorage.setItem('token', data.token)
						return true
					}else {
						return false
					}

				} catch (error) {
					console.log(error)
				}
			}
		}
	};
};

export default getState;
