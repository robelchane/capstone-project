const User = require('@/models/user');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({username});
    if(!user){
        return res.status(404).json({error: 'User not found'});
    }

    const isFound = await bcrypt.compare(password, user.password);
    if(!isFound){
        return res.status(401).json({error: 'Invalid password'});
    }

    res.status(200).json({user});
});

    