const database = {
  users: [
    {
      username: 'Stualyttle',
      password: 'password',
      token: '5859666463144a7c8296aff378f3f835',
    },
    {
      username: 'kipje',
      password: 'Password',
      token: 'a2917a641bbe4c349547ee70619ac01f',
    },
    {
      username: 'jack',
      password: 'Password1',
      token: '95565cc90cb549168babb25d1473a490',
    }
  ],
  data: [
    {
      token: '5859666463144a7c8296aff378f3f835',
      displayName: 'Stualyttle Kirry',
      tag: '2000'

    },
    {
      token: '95565cc90cb549168babb25d1473a490',
      displayName: 'Jack The Ripper',
      tag: '6969'
    }
  ]
};

function signIn(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = database.users.map(user => user.username);
      if (users.includes(username)) {
        const user = database.users.find(user => user.username === username);
        if (password === user.password) {
          resolve(user);
        } else {
          reject(new Error('Password incorrect.'));
        }
      } else {
        reject(new Error('User not found.'));
      }
    }, 1000);
  });
}

function getData(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tokens = database.data.map(data => data.token);
      if (tokens.includes(user.token)) {
        const data = database.data.find(data => data.token === user.token);
        resolve(data);
      } else {
        reject(new Error('No data found!'));
      }
    }, 1000);
  });
}

function renderDashboard({displayName, tag}) {
  console.log(`${displayName}#${tag} just signed in!`);
}

signIn('Stualyttle', 'password')
  .then(user => getData(user))
  .then(data => renderDashboard(data))
  .catch(err => console.log(err.message));

signIn('Stualyttle', 'Pasord')
  .then(user => getData(user))
  .then(data => renderDashboard(data))
  .catch(err => console.log(err.message));

signIn('kipje', 'Password')
  .then(user => getData(user))
  .then(data => renderDashboard(data))
  .catch(err => console.log(err.message));

signIn('jack', 'Password1')
  .then(user => getData(user))
  .then(data => renderDashboard(data))
  .catch(err => console.log(err.message));