class Launcher {
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.004,
            length: 10
        }
        this.launcher = Constraint.create(options)
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA=null;
    }
    
    display(){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.bodyB.position;
        strokeWeight(4);
        line(pointA.x. pointA.y. pointb.x. pointB.y);
    }
}


