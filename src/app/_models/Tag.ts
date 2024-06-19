export class Tag {
  static readonly ANGULAR = new Tag('Angular', '#C50836', 'assets/angular.svg');
  static readonly TYPESCRIPT = new Tag('TypeScript', '#3178C6', 'assets/typescript.svg');
  static readonly JAVA_SPRING_BOOT = new Tag('Java Spring Boot', '#69B729', 'assets/spring.svg');
  static readonly JAVASCRIPT = new Tag('JavaScript', '#F7DF1E', 'assets/javascript.svg');
  static readonly REACT = new Tag('React', '#66DBFB', 'assets/react.svg');
  static readonly POSTGRESQL = new Tag('PostgreSql', '#396C94', 'assets/postgreSql.svg');
  static readonly DOCKER = new Tag('Docker', '#0895E7', 'assets/docker1.svg');


  private constructor(private readonly key: string, public readonly color: string, public readonly icon: string) {

  }

  toString() {
    return this.key;
  }

}
