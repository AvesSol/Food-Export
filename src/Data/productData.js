// Spices 
import BlackPepper from "../Images/Spices/Black-Pepper.jpg"
import CorianderPowder from "../Images/Spices/Coriander-Powder.jpg"
import CuminSeeds from "../Images/Spices/Cumin-Seeds.jpg"
import RedChillyPowder from "../Images/Spices/Red-Chilly-Powder.jpg"
import TurmericPowder from "../Images/Spices/Turmeric-Powder.jpg"
import CommingSoon from "../Images/ReadyToEat/CommingSoon.png"

// Yellow Pantry 
import YeelowPantryCommingSoon from "../Images/ourBrand/YellowPantry/tmLogo.png"
import AmlaCandyChatpata from "../Images/ourBrand/YellowPantry/amlaCandyChatpata.png"
import AmlaCandySweet from "../Images/ourBrand/YellowPantry/amlaCandySweet.png"
import FlaxSeedsSalted from "../Images/ourBrand/YellowPantry/flaxSeedsSalted.png"
import JaggeryCubesKolhapuri from "../Images/ourBrand/YellowPantry/jaggeryCubesKolhapuri.png"
import JaggeryCubesSouth from "../Images/ourBrand/YellowPantry/jaggeryCubesSouth.png"
import JaggeryPowerKolhapuri from "../Images/ourBrand/YellowPantry/jaggeryPowerKolhapuri.png"
import JaggeryShakkarPowderPunjabi from "../Images/ourBrand/YellowPantry/jaggeryShakkarPowderPunjabi.png"
import JowarPuffsPer from "../Images/ourBrand/YellowPantry/jowarPuffsPer.png"
import MacaroniPastaWheat from "../Images/ourBrand/YellowPantry/macaroniPastaWheat.png"
import MiletMixPudina from "../Images/ourBrand/YellowPantry/miletMixPudina.png"
import PennePastaWheat from "../Images/ourBrand/YellowPantry/pennePastaWheat.png"
import PerlMilletBites from "../Images/ourBrand/YellowPantry/perlMilletBites.png"
import RawMakhanaFoxNut from "../Images/ourBrand/YellowPantry/rawMakhanaFoxNut.png"
import TrailMixHoney from "../Images/ourBrand/YellowPantry/trailMixHoney.png"
import TrailMixJaggery from "../Images/ourBrand/YellowPantry/trailMixJaggery.png"

// Grains 
import BasmatiRice from "../Images/Grains/Basmati-Rice.jpg"
import ChanaDal from "../Images/Grains/Chana-Dal.jpg"
import MasoorDal from "../Images/Grains/Masoor-Dal.jpg"
import Moongdal from "../Images/Grains/Moong-dal.jpg"
import WheatFlour from "../Images/Grains/Wheat-Flour.jpg"

// Dry Fruits 
import Almonds from "../Images/Dry Fruits/Almonds.jpg"
import Cashews from "../Images/Dry Fruits/Cashews.jpg"
import Pistachios from "../Images/Dry Fruits/Pistachios.jpg"
import Raisins from "../Images/Dry Fruits/Raisins.jpg"
import Walnuts from "../Images/Dry Fruits/Walnuts.jpg"

// Organic 
import BasmatiRice1 from "../Images/Organic/BasmatiRice.png"
import CHANNADAL from "../Images/Organic/CHANNADAL.png"
import ChickPeas from "../Images/Organic/ChickPeas.png"
import LittleMillet from "../Images/Organic/LittleMillet.png"
import NonBasmati from "../Images/Organic/NonBasmati.png"
import RedRajma from "../Images/Organic/RedRajma.png"
import Ragi from "../Images/Organic/Ragi.png"

const productData = [
  
  // Spices
  {
    title: "Black Pepper",
    img: `${BlackPepper}`,
    category: "spices",
    categoryTitle: "Spices",
  },
  {
    title: "Coriander Powder",
    img: `${CorianderPowder}`,
    category: "spices",
    categoryTitle: "SPICES",
  },
  {
    title: "Cumin Seeds",
    img: `${CuminSeeds}`,
    category: "spices",
    categoryTitle: "SPICES",
  },
  {
    title: "Red Chilly Powder",
    img: `${RedChillyPowder}`,
    category: "spices",
    categoryTitle: "SPICES",
  },
  {
    title: "Turmeric Powder",
    img: `${TurmericPowder}`,
    category: "spices",
    categoryTitle: "SPICES",
  },

  // Grains Pulses 
  {
    title: "Basmati Rice",
    img: `${BasmatiRice}`,
    category: "grainspulses",
    categoryTitle: "Grains & Pulses",
  },
  {
    title: "Moong Dal",
    img: `${Moongdal}`,
    category: "grainspulses",
    categoryTitle: "Grains & Pulses",
  },
  {
    title: "Chana Dal",
    img: `${ChanaDal}`,
    category: "grainspulses",
    categoryTitle: "Grains & Pulses",
  },
  {
    title: "Masoor Dal",
    img: `${MasoorDal}`,
    category: "grainspulses",
    categoryTitle: "Grains & Pulses",
  },
  {
    title: "Wheat Flour",
    img: `${WheatFlour}`,
    category: "grainspulses",
    categoryTitle: "Grains & Pulses",
  },

  // Dry Fruites 
  {
    title: "Almonds",
    img: `${Almonds}`,
    category: "dryfruits",
    categoryTitle: "Dry Fruits",
  },
  {
    title: "Cashews",
    img: `${Cashews}`,
    category: "dryfruits",
    categoryTitle: "Dry Fruits",
  },
  {
    title: "Raisins",
    img: `${Raisins}`,
    category: "dryfruits",
    categoryTitle: "Dry Fruits",
  },
  {
    title: "Walnuts",
    img: `${Walnuts}`,
    category: "dryfruits",
    categoryTitle: "Dry Fruits",
  },
  {
    title: "Pistachios",
    img: `${Pistachios}`,
    category: "dryfruits",
    categoryTitle: "Dry Fruits",
  },

  //Organic
  {
    title: "Basmati Rice",
    img: `${BasmatiRice1}`,
    category: "organic",
    categoryTitle: "Organic",
  },
  {
    title: "Channa Dal",
    img: `${CHANNADAL}`,
    category: "organic",
    categoryTitle: "Organic",
  },
  {
    title: "Chick Peas",
    img: `${ChickPeas}`,
    category: "organic",
    categoryTitle: "Organic",
  },
  {
    title: "Little Millet",
    img: `${LittleMillet}`,
    category: "organic",
    categoryTitle: "Organic",
  },
  {
    title: "Non Basmati",
    img: `${NonBasmati}`,
    category: "organic",
    categoryTitle: "Organic",
  },
  {
    title: "Red Rajma",
    img: `${RedRajma}`,
    category: "organic",
    categoryTitle: "Organic",
  },
  {
    title: "Ragi",
    img: `${Ragi}`,
    category: "organic",
    categoryTitle: "Organic",
  },
  //Yellow Pantry
  {
    title: "JAGGERY CUBES", 
    img: `${JaggeryCubesKolhapuri}`,
    flavours: "Kolhapuri",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "JAGGERY CUBES", 
    img: `${JaggeryCubesSouth}`,
    flavours: "South",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "JAGGERY POWDER", 
    img: `${JaggeryPowerKolhapuri}`,
    flavours: "Kolhapuri",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "JAGGERY SHAKKAR POWDER", 
    img: `${JaggeryShakkarPowderPunjabi}`,
    flavours: "Panjabi",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "JOWAR PUFFS", 
    img: `${JowarPuffsPer}`,
    flavours: "Per Peri",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "AMLA CANDY", 
    img: `${AmlaCandyChatpata}`,
    flavours: "Chatpata",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "AMLA CANDY", 
    img: `${AmlaCandySweet}`,
    flavours: "Sweet",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "FLAX SEEDS",
    img: `${FlaxSeedsSalted}`,
    flavours: "Salted & Seasoned With Lemon",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "MACARONI PASTA", 
    img: `${MacaroniPastaWheat}`,
    flavours: "Wheat Semolina No Maida",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "MILET MIX", 
    img: `${MiletMixPudina}`,
    flavours: "Pudina",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "PENNE PASTA", 
    img: `${PennePastaWheat}`,
    flavours: "Wheat Semolina No Maida",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "PERL MILLET BITES", 
    img: `${PerlMilletBites}`,
    flavours: "Kharodi",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "RAW MAKHANA", 
    img: `${RawMakhanaFoxNut}`,
    flavours: "Fox Nut",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "TRAIL MIX", 
    img: `${TrailMixHoney}`,
    flavours: "Honey",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "TRAIL MIX", 
    img: `${TrailMixJaggery}`,
    flavours: "Jaggery",
    category: "ourBrand",
    categoryTitle: "Our Brand",
  },
  {
    title: "Pickles & Chutney",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5svAg3uS4g2_iX0PODWHmirnh8cBcdvHRzw&s",
    category: "pickles&chutney",
    categoryTitle: "Pickles & Chutney",
  },
  {
    title: "Ready to Eat",
    img: `${CommingSoon}`,
    category: "readytoeat",
    categoryTitle: "Ready to Eat",
  },
];

export default productData;
