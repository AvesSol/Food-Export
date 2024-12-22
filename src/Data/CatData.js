import pickles from "../Images/Category/pickles1.png"
import spices from "../Images/Category/spices.png"
import organic from "../Images/Category/organic.png"
import dryFruit from "../Images/Category/dryF.png"
import grains from "../Images/Category/grains.png"
import readytoeat from "../Images/Category/readytoeat1.png"
import privatelable from "../Images/Category/privateLable1.png"
import yellowPantry from "../Images/Category/yellow_pentry.png"



const category = [

    {
        title:"SPICES",
        des: "des",
        linkTitle : "spices",
        // img : 'https://www.ambikaglobal.com/wp-content/uploads/2022/10/spices.png',
        img : `${spices}`,
        color: "#DF6536"
    
    },
    {
        title:"GRAINS PULSES",
        des: "des",
        linkTitle : "grainspulses",
        // img : "https://www.ambikaglobal.com/wp-content/uploads/2023/10/Rice-Pulses-img.png",
        img : `${grains}`,
        color: "#cb913f"
    
    },
    {
        title:"DRY FRUITS",
        des: "des",
        linkTitle : "dryfruits",
        // img : "https://static.vecteezy.com/system/resources/previews/050/176/166/non_2x/bowl-of-dried-fruits-top-view-isolated-on-transparent-background-png.png",
        img : `${dryFruit}`,
        color: "#86308a"     
        
    },
    {
        title:"PICKLES & CHUTNEY",
        des: "des",
        linkTitle : "pickles&chutney",
        // img : "https://www.ambikaglobal.com/wp-content/uploads/2023/10/pickles-img.png",
        img : `${pickles}`,
        color: "#214279"     
        
    },
   
    {
        title:"READY TO EAT",
        des: "des",
        linkTitle : "readytoeat",
        // img : "https://www.ambikaglobal.com/wp-content/uploads/2023/10/pickles-img.png",
        img:`${readytoeat}`,
        color: "#a99c00"     
        
    },
    {
        title:"ORGANIC",
        des: "des",
        linkTitle : "organic",
        // img : "https://www.ambikaglobal.com/wp-content/uploads/2023/10/Rice-Pulses-img.png",
        img : `${organic}`,
        color: "#418248"
    
    },

    {
        title:"PRIVATE LABELING",
        des: "des",
        linkTitle : "privatelabeling",
        // img : "https://toynamics.com/wp-content/uploads/2021/10/titel-privatelabel.svg",
        img:`${privatelable}`,
        color: "#418278"     
        
    },

    {
        title:"Our Product",
        des: "des",
        linkTitle : "ourproduct",
        // img : "https://toynamics.com/wp-content/uploads/2021/10/titel-privatelabel.svg",
        img:`${yellowPantry}`,
        color: "#82803d"     
        
    },
]

export default  category;