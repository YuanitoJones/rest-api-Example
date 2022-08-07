import express from 'express'
import morgan from 'morgan';
import pkg from '../package.json'

import productroutes from './routes/products.routes'
import authroutes from './routes/auth.routes'
import { createRoles } from './libs/initialsetup';
import userRoute from './routes/user.routes'

const app = express();
createRoles();
app.set('pkg', pkg)

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
    
})

app.use('/api/products', productroutes);
app.use('/api/auth', authroutes);
app.use('/api/users', userRoute);
export default app;