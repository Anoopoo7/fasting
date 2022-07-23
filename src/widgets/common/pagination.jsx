import React from 'react';

function Pagination({ count, clickFunction, currentPage }) {
    let pages = [];
    for (let i = 0; i < count + 1; i++) {
        pages.push(i + 1)
    }
    return (
        <nav aria-label="Page navigation example">
            <br />
            <ul class="pagination">

                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                {
                    pages && pages.map(i => <li class="page-item">
                        <span class={`page-link ${(currentPage === i) ? "text-light bg-dark" : "text-dark"}`} onClick={() => clickFunction(i - 1)}>{i}</span>
                    </li>)
                }
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>

            </ul>
            <br /><br /><br /><br />
        </nav>
    );
}

export default Pagination;