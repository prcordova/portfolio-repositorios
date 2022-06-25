import React, { useEffect } from "react"
import { useState } from "react"
import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

//https://api.github.com/user/prcordova/repos

const repository = {
    name: '',
    description: 'Forms in React',
    link: 'https://github.com/prcordova/FeedSystem',
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/prcordova/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">

            <div>
                <h1>Lista de Repositórios</h1>
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