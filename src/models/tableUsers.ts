
import{Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo,
    HasMany,
    Unique,
    AllowNull,
    Default,
    }from 'sequelize-typescript'


    @Table({
    tableName:'Tableusers',
    timestamps:true
})

export class Tableusers extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
      type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      name!: string;

      @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      lastname!: string;

      @Column({
        type: DataType.STRING,
        allowNull: false,
        unique:true
      })
      email!: string;

      @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      password!: string;

      @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      position!:string;
 
  }





  

