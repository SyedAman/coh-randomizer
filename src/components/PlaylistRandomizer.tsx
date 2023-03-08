import React, { useState } from 'react';

export interface PlaylistRandomizerProps {
    getRandomPlaylist?: () => void;
}

export function RandomizerButton({
    getRandomPlaylist,
}: PlaylistRandomizerProps) {
    return <button onClick={getRandomPlaylist}>Randomize</button>;
}

export interface ResultsDisplayProps {
    results?: {
        faction: string;
        gamemode: string;
    };
}

export function ResultsDisplay({ results }: ResultsDisplayProps) {
    const text = results ? `Results | Faction: ${results.faction} | Gamemode: ${results.gamemode}` : 'Results';
    
    return <p>{text}</p>;
}

export function PlaylistRandomizerContainer() {
    const [results, setResults] = useState<ResultsDisplayProps['results']>();

    const getRandomPlaylist = () => {
        const factions = ['USF', 'UKF', 'Wehrmacht', 'DAK'];
        const gamemodes = ['1v1', '2v2', '3v3', '4v4'];
        setResults({
            faction: factions[Math.floor(Math.random() * factions.length)],
            gamemode: gamemodes[Math.floor(Math.random() * gamemodes.length)],
        });
    };

    return (
        <>
            <RandomizerButton getRandomPlaylist={getRandomPlaylist} />
            <ResultsDisplay results={results} />
        </>
    );
}