const func = []

for (let i = 0; i <10; i++) {
    func.push(function() {
        console.log(i)
    })
}


//Já com let os valores serão passados de acordo com a posição indicada
func[2]()
func[8]()
