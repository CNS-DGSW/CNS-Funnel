# CNS Funnel

cns 동아리에서 사용되는 페이지 처리는 2가지 입니다.

인덱스로 처리되는 방법
string에 따른 페이지 처리 방법

## 인덱스 페이지 처리

```tsx
import { OrderFunnel } from "@dgswcns/cns-funnel";

<OrderFunnel page={1}>
  <div>1</div>
  <div>2</div>
</OrderFunnel>
```

## string 페잊 처리

```tsx
const TestPage = () => {
  const [TestFunnel, Step, setFunnel] = useKeyFunnel<"k" | "u">("k");

  return (
    <TestFunnel>
      <Step name="k">
        <div onClick={() => setFunnel("u")}>k</div>
      </Step>
      <Step name="u">
        <div>u</div>
      </Step>
    </TestFunnel>
  );
};
```