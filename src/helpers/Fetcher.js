function renderParams(params) {
  if (!params || Object.keys(params).length === 0) { return '' }
  return Object.keys(params).reduce((result, key) => `${result}${key}=${params[key]}&`, '?').slice(0, -1)
}

const routes = {
  getUser: id => `http://localhost:5555/api/v1/user${id.email ? `?email=${id.email}` : ''}`,
  getIdea: id => `http://localhost:5555/api/v1/user/${id.uid}/idea${id.idea ? `/${id.idea}` : ''}`,
};

const Fetcher = {};

Fetcher.getUid = async (id = {email: 'guest'}) => {
  const user = await this.a.get({
    route: 'getUser',
    id,
  })
  return user.id;
}

Fetcher.get = async opts => {
  try {
    const dbCall = await fetch(routes[opts.route](opts.id) + renderParams(opts.params));
    return await dbCall.json();
  } catch(e) {
    if (opts.errorHandling) { opts.errorHandling({ e }); }
  }
}

export default Fetcher;
