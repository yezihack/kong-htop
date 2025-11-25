---
title: "Kong-Htop 테마에 오신 것을 환영합니다"
date: 2024-01-15
description: "Kong-Htop 테마의 기본 기능을 소개하는 환영 게시물"
tags: ["hugo", "테마", "예제"]
categories: ["튜토리얼"]
image: "https://via.placeholder.com/800x600"
---

## 👋 환영합니다

**Kong-Htop** 테마에 오신 것을 환영합니다! 글래스모피즘 디자인 스타일을 특징으로 하는 현대적이고 우아한 Hugo 테마입니다.

## ✨ 테마 기능

이 테마는 많은 강력한 기능을 제공합니다:

- 🎨 **현대적인 글래스모피즘 디자인** - 유리질감 UI 디자인 스타일
- 🌓 **완전한 다크 모드 지원** - 자동 시스템 테마 환경설정 감지
- 📱 **반응형 디자인** - 데스크톱, 태블릿 및 모바일 기기 완벽 지원
- 🏷️ **현대적인 태그 클라우드** - 동적 글꼴 크기 및 호버 애니메이션
- 📝 **게시물 타임라인** - 연도별로 그룹화된 컴팩트한 목록 보기
- 🔍 **로컬 검색 기능** - JSON 기반 전체 텍스트 로컬 검색
- 📚 **게시물 목차** - 자동 생성되는 사이드바 내비게이션
- ⚡ **고성능** - GPU 가속 애니메이션 및 최적화된 CSS

## 🚀 빠른 시작

### 1. 테마 설치

```bash
git submodule add https://github.com/yezihack/kong-htop.git themes/kong-htop
```

### 2. 사이트 구성

예제 구성 복사:

```bash
cp themes/kong-htop/exampleSite/hugo.toml ./
```

### 3. 게시물 생성

```bash
hugo new posts/my-post.md
```

### 4. 로컬 미리보기

```bash
hugo server
```

결과를 보려면 `http://localhost:1313`을 방문하세요.

<!-- more -->

## 💡 게시물 작성 팁

### Front Matter 사용

```yaml
---
title: "게시물 제목"
date: 2024-01-15
description: "게시물 설명"
tags: ["태그1", "태그2"]
categories: ["카테고리"]
image: "커버.jpg"
---
```

### 지원되는 Markdown 기능

#### 목록

- 항목 1
- 항목 2
- 항목 3

#### 코드 블록

```go
package main

import "fmt"

func main() {
    fmt.Println("안녕하세요, Kong-Htop!")
}
```

#### 표

| 기능 | 설명 | 상태 |
|------|------|------|
| 다크 모드 | 자동 전환 | ✅ |
| 검색 | 로컬 검색 | ✅ |
| 반응형 | 모바일 적응형 | ✅ |

#### 인용

> 이것은 인용 블록입니다. 게시물에서 중요한 정보를 강조하는 데 사용할 수 있습니다.

#### 수학 공식 (KaTeX)

LaTeX 수학 공식 지원:

$$E = mc^2$$

## 🎨 테마 커스터마이징

### 색상 변경

`hugo.toml`에서 색상 구성 수정:

```toml
[params]
    link_color = "#268bd2"  # 링크 색상
    text_color = "#222"     # 텍스트 색상
```

### 소셜 미디어 추가

```toml
[params]
    github_url = "https://github.com/your-username"
    twitter_url = "https://twitter.com/your-handle"
```

## 📊 성능 최적화

이 테마는 다음 사항에 대해 최적화되었습니다:

- ✅ CSS 선택자 최적화
- ✅ GPU 가속 애니메이션
- ✅ 온디맨드 스크립트 로딩
- ✅ 이미지 지연 로딩 지원

## 🔗 유용한 링크

- [전체 문서](https://github.com/yezihack/kong-htop/)
- [빠른 시작 가이드](https://github.com/yezihack/kong-htop/blob/main/GETTING_STARTED.md)
- [Kong-Htop GitHub](https://github.com/yezihack/kong-htop)
- [Hugo 공식 웹사이트](https://gohugo.io/)

## 📝 다음 단계

1. **구성 편집** - `hugo.toml`을 수정하여 사이트 구성
2. **콘텐츠 생성** - `hugo new posts/your-post.md`를 사용하여 새 게시물 생성
3. **스타일 커스터마이징** - `assets/css/`에 사용자 정의 스타일 추가
4. **사이트 배포** - GitHub Pages, Netlify 등에 사이트 배포

## 🎉 즐거운 글쓰기 되세요

이제 글쓰기를 시작할 준비가 되었습니다! Kong-Htop 테마를 즐겨보세요.

---

**도움이 필요하신가요?** [GitHub Issues](https://github.com/yezihack/kong-htop/issues) 또는 [Hugo 문서](https://gohugo.io/documentation/)를 확인하세요.

