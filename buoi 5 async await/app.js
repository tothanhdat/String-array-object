$(document).ready(function() {
    const getUsers = async (uri, callback) => {
        fetch(uri)
            .then(res => res.json())
            .then(res2 => {
                callback(res2.results)
            })
    }
    const setUser = users => {
        $
    }
})