class reactangle{
    constructor(height,width,color){
        this.width = width
        this.height = height
        this.color = color

    }
    area(){
        let area = this.width * this.height
        return area
    }
}

let rect = new reactangle(3,4,"white")

let area = rect.area
