import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));


const listOfTodo = []


app.get('/', (req, res) => {
    res.render('index.ejs', {listOfTodo : listOfTodo});
})

app.post('/submit', (req, res) => {
    listOfTodo.push(req.body.ToDoChild);
    console.log(req.body);
    res.render('index.ejs', {listOfTodo : listOfTodo});
})

app.post('/delete', (req, res) => {
    listOfTodo.length = 0;
    res.render('index.ejs', {listOfTodo : listOfTodo});
})

app.listen(port, () => {
    console.log('Running on port ' + port);
})