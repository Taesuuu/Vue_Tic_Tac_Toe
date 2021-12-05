class maptile {

    constructor(){
        this.value = null;
        this.isHighlighted = false;
        this.isshow = false;
        this.imglink = null;
        this.oimg = 'circle.png';
        this.ximg = 'ximg.png';
    }
    
    showimg(){
        if(this.isshow == true){
           if(this.value === 'O'){
                this.imglink = this.oimg;
           } 
           else if(this.value === 'X')
           {
               this.imglink = this.ximg;
           }
           else if(this.value == null)
           {
               this.imglink = null;
           }
        }
    }

}
