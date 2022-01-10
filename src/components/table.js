import React from 'react';
const Table = ({ columns, data, toggle ,editModalOn }) => {
    return (
        <>
            <table className="table table-striped table-responsive">
                <thead className='col-sm-4 col-md-12 col-lg-12'>
                    <tr>
                        {columns.map((item, ind) =>
                            <th key={ind} scope="col">{item}</th>
                        )}

                    </tr>
                </thead>

                <tbody>
                    {data.map((item, ind) => {
                        return (
                            <tr key={ind}>
                                {Object.values(item).map((val, index) => {
                                    return (
                                        <td key={index} >{val}</td>
                                    )
                                }

                                )}
                                <td>
                                    <div className="buttons mt-2">
                                        <a href="#" className="btn btn-primary btn-large" onClick={(item) => editModalOn(item)}>Edit</a>
                                        <a href="#" className="btn btn-danger btn-large">Delete</a>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                    )}

                </tbody>
            </table>
        </>
    )
}
export default Table;