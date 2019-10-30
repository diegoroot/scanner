export class AppConfig {
    /* Colocar la 'url:puerto/nombre_api/versión/' con una barra inclinada '/' al final */
    public static get lat(): string { return 'http://ec2-52-67-80-145.sa-east-1.compute.amazonaws.com:3000/orders/v1/'; }
    public static get long(): string { return 'http://ec2-52-67-80-145.sa-east-1.compute.amazonaws.com:3001/operating-units/v1/'; }
    public static get town(): string { return 'http://ec2-52-67-80-145.sa-east-1.compute.amazonaws.com:3002/operational-distribution/v1/'; }
    // public static get closingCauses (): string {
      //  return 'http://ec2-52-67-80-145.sa-east-1.compute.amazonaws.com:3002/closing_causes/v1/'; }
    /* Modo local */
    /* public static get urlApiUnits(): string { return 'http://localhost:3001/operating-units/v1/'; };
    public static get urlApiOrders(): string { return 'http://localhost:3000/orders/v1/'; }; */
}
