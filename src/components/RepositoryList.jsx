import React, { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom'
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import SearchBar from '../components/SearchBar/index'
//https://api.github.com/user/prcordova/repos



export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);
    const [searchValue, setSearchValue] = useState('prcordova');

    useEffect(() => {

        fetch(`https://api.github.com/users/${searchValue}/repos`)
            .then(response => response.json())
            .then(data => setRepositories(data))
        console.log(repositories)

    }, [])

    function handleChangeSearchValue(event) {

        setSearchValue(event)
        console.log(event)

    }
    console.log(searchValue)
    return (
        <section href="#" className="repository-list">

            <div>
                <h1>Github Repositories</h1>
                <SearchBar
                    onChange={(e) => handleChangeSearchValue(e.target.value)}
                />
                <ul>
                    <div className="card">
                        {repositories.map(repository => {
                            return <RepositoryItem
                                key={repository.name}
                                repository={repository} />
                        })}
                    </div>

                </ul>
            </div>
        </section>
    )
}