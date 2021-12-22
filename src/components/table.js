import React from 'react';
const Table = ({ columns, data, toggle }) => {
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        {columns.map((item, ind) =>
                            <th key={ind} scope="col">{item}</th>
                        )}

                    </tr>
                </thead>

                <tbody>
                    {data.map((item, ind) =>
                        <tr key={ind}>
                            <td >{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td>{item.city}</td>
                            <td>
                                <div className="buttons mt-2">
                                    <a href="#" className="btn btn-primary btn-large" onClick={(item) => toggle(item)}>Edit</a>
                                    <a href="#" className="btn btn-danger btn-large">Delete</a>
                                </div>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </>
    )
}
export default Table;