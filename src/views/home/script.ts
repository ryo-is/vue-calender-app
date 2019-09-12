import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Home extends Vue {
  public text: string = "hoge"

  public hoge(): string {
    return this.text
  }
}
