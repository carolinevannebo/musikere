
interface IMusicaContext {
    musicians: string[];
    addMusician: (newMusician: string) => void; // addMusician is a function that takes a string and returns void, it's a recipe for how the function to add a musician should look
    //musician: Object; // could also be another interface e.g. IMusician...
}

export default IMusicaContext;