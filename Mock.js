class Mock  {
    constructor(argArr, argCnt) {
        let cnt = argArr.length + ""	
    
        const make = ["Audi", "Posche", "Ford", "Mercedes", "BMW", "Honda", "Toyota", "Cheverolet", "Dodge", "Jeep", "Volvo"]

        const model = [
            ["A4", "A6", "A8", "Q5", "Q7", "R8"], 
            ["911", "Caymen", "Cayenne", "Panamera", "Carrera", "Boxter", "Macan"],
            ["Escape", "F150", "Focus", "Fusion", "Explorer", "Mustang"],
            ["300C", "450SL", "GLS450", "AMG C63", "SLK", "GLA 250"],
            ["328", "i3", "i8", "X5", "C4", "550"],
            ["Accord", "Civic", "CR-V", "Pilot", "Type R", "Odyssey"],
            ["Corolla", "RAV 4", "Camry", "Highlander", "4 Runner", "Tacoma"],
            ["Silverado", "Camero", "Corvette", "Impala", "Malibu", "Bolt"],
            ["Dart", "Challenger", "Charger", "RAM 1500", "Caravan", "Viper"],
            ["Cherokee", "Wrangler", "Rubicon", "Liberty", "Renegade", "Gladiator"]
            ["S90", "S60","V40", "S70", "850", "XC90"]
        ]

        let json = []
        let obj
        let car = 128656
        for (let i=0;i<argCnt;i++) {
            obj={}
            let x = parseInt(Math.random()* 10)
            let y = parseInt(Math.random()* 6)
            obj.make = make[x]
            obj.model = model[x][y]
            obj.price = parseInt(Math.random()*50)*1000 + 5500
            obj.year = parseInt(Math.random()* 10) + 2010
            obj.car = '&#' + (car + parseInt(i % 16))
            json.push(obj)
        }
        return json
    }
}