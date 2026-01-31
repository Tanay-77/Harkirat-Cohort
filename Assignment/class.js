class reactangle{
    constructor(height,width,color){
        this.height = height
        this.width = width
        this.color = color
    }
// methods 
    area(){
        const area = this.width * this.height
        return area
    }
}

let rect = new reactangle(1,2,"blue")