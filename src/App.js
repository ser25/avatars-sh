import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';
import './scss/app.scss'
import {useMemo, useState} from "react";
import TheSelect from "./components/TheSelect";
import {flips, hairs, hairColors, mouths, bgs, eyes} from './utils/data'

function App() {
    const [title, setTitle] = useState('John Doe')
    const [hair, setHair] = useState('long01')
    const [hairColor, setHairColor] = useState('0e0e0e')
    const [mouth, setMouth] = useState('variant12')
    const [flip, setFlip] = useState(true)
    const [bg, setBg] = useState('b6e3f4')
    const [eye, setEye] = useState('variant02')
    const avatar = useMemo(() => {
        return createAvatar(adventurer, {
            seed: 'John Doe',
            hair: [hair],
            hairColor: [hairColor],
            mouth: [mouth],
            flip: flip,
            backgroundColor: [bg],
            eyes: [eye],
        }).toDataUriSync();
    }, [hair, hairColor, mouth, flip, bg, eye]);
  return (
    <div className="App">
        <header className={"header"}>
          <h1 className={'header__title'}>Avatars</h1>
        </header>
        <div className={"container"}>
            <div className={'avatars'} >
                <img src={avatar} alt="Avatar" />
            </div>
            <div className={'option'}>
                <div className={"option__title select"}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
                </div>
                <div className={"option__hair select"}>
                    <TheSelect value={hair} setValue={setHair} options={hairs}/>
                </div>
                <div className={"option__hair-color select"}>
                    <TheSelect value={hairColor} setValue={setHairColor} options={hairColors}/>
                </div>
                <div className={"option__mouth select"}>
                    <TheSelect value={mouth} setValue={setMouth} options={mouths}/>
                </div>
                <div className={"option__flip select"}>
                    <TheSelect value={flip} setValue={setFlip} options={flips}/>
                </div>
                <div className={"option__bg select"}>
                    <TheSelect value={bg} setValue={setBg} options={bgs}/>
                </div>
                <div className={"option__earrings select"}>
                    <TheSelect value={eye} setValue={setEye} options={eyes}/>
                </div>
                <a href={avatar} download={title}>Download</a>
            </div>


        </div>
    </div>
  );
}

export default App;
