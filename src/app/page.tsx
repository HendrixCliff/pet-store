import Data from './components/Data'
import PetCard from './components/PetCard'
import Gallery from './components/Gallery'



export default function Home() {
  return (
    <section className="overflow-hidden">
      <Gallery/>
      <h3 className="text-[2.5rem] max-lg:text-[1.5rem] ml-10 font-bold  ">What are you Shopping for today?</h3>
      <div className="flex flex-wrap gap-5  ml-[3em]">
        { Data.map(pet=> {
        return <PetCard key={pet.id} image={pet.url} name={pet.name} history={pet.history} />
        })}
      </div>
    </section>
  );
}
