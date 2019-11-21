import Noty from 'noty';

const notice = (options) => {
    const default_options = {
        type: 'succes',
        timeout: 1000,
        theme: 'sunset'
    }

    let opts = Object.assign({}, default_options, options)

    new Noty(opts).show()
}

export default notice;