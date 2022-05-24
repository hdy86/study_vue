<template>
    <div>
        <PageTitle />
        <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달" />

        <page-title :title="title" /><br>

        <blog-post likes="42" />
        <blog-post :likes="42" />
        <blog-post :likes="likes" />

        <blog-post :is-published="true" />
        <blog-post :is-published="isShow" />
        
        <blog-post :comment-ids="[234, 266, 273]" />
        <blog-post :comment-ids="commentIds" />
        
        <blog-post :author="{'name':'Veronica'}" />
        <blog-post :author="post" />

        <blog-post v-bind="post" />
        <blog-post :id="post.id" :title="post.title" />
    </div>
</template>
<script>
    import PageTitle from '../components/PageTitle'; // 컴포넌트 import
    import BlogPost from '../components/BlogPost';
    export default {
        components: {PageTitle, BlogPost}, // 현재 컴포넌트에서 사용할 컴포넌트 등록
        data() {
            return{
                title: '동적 페이지 타이틀',
                likes: 42, 
                commentIds: [234, 266, 273],
                post: {
                    id: 1, 
                    title: 'Vue 3 프로젝트 투입 일주일 전'
                },
                isShow: true
            };
        }
    }
</script>