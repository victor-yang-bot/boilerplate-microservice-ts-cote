import cote from 'cote';

export class TimeService {
    private timeResponder: any;

    public constructor() {
        
    }


    public start() {
        this.timeResponder = new cote.Responder({ name: 'Time Service' });
        
        this.timeResponder.on('time', (req: any, cb: any) => {
            console.log(req)
            cb(null, new Date());
        });
    }
}




