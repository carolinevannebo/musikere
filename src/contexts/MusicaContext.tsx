import { FC, ReactNode, createContext, useState } from 'react';
import IMusicaContext from '../interfaces/IMusicaContext';

const MusicaContext = createContext<IMusicaContext | null>(null);
interface Props { children: ReactNode; } // ReactNode is the same as React.ReactNode

const MusicaProvider: FC<Props> = ({children}) => {
    
    const [musicians, setMusicians] = useState<string[]>(['Mozart','Beethoven','Bach','Chopin','Vivaldi','Haydn','Schubert']);

    const addMusician = (musician: string) : void => {
        setMusicians([...musicians, musician]); //immutability
    };

    return (
        <MusicaContext.Provider value={{musicians, addMusician}}>
            {children}
        </MusicaContext.Provider>
    )
}