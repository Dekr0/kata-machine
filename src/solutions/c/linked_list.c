#include <stdlib.h>

#include "linked_list.h"

typedef struct node {
    i64 v;
    node *prev;
    node *next;
} node;

typedef struct sll {
    u64 len;
    node *head;
    node *tail;
} sll;

sll *init_sll() {
    return calloc(1, sizeof(sll));
}

void free_sll(sll *s) {
    if (s == NULL) return;

    if (s->len == 0) return free(s);

    if (s->len == 1) {
        free(s->head);
        return free(s);
    }

    node *curr = s->head;
    node *next = s->head->next;
    while (curr != NULL && next != NULL) {
        free(curr);
        curr = next;
        next = curr->next;
    }

    if (curr != NULL)
        free(curr);

    if (next != NULL)
        free(next);

    free(s);
}

i8 sll_prepend(sll *s, const i64 v) {
    if (s == NULL)
        return 1;
    node *n = calloc(1, sizeof(node));
    if (n == NULL)
        return 1;
    n->v = v;
    if (s->len == 0) {
        s->head = s->tail = n;
        s->len++;
        return 0;
    }
    n->next = s->head;
    s->head = n;
    s->len++;
    return 0;
}

i8 sll_append(sll *s, const i64 v) {
    if (s == NULL)
        return 1;
    node *n = calloc(1, sizeof(node));
    if (n == NULL)
        return 1;
    n->v = v;
    if (s->len == 0) {
        s->head = s->tail = n;
        s->len++;
        return 0;
    }
    s->tail->next = n;
    s->tail = n;
    s->len++;
    return 0;
}

i8 sll_get(const sll *s, i64 *v, const u64 pos) {
    if (s == NULL)
        return 1;

    if (pos >= s->len)
        return 1;

    u64 i = 0;
    const node *curr = s->head;
    while (i++ < pos)
        curr = curr->next;

    *v = curr->v;

    return 0;
}

i8 sll_remove_at(sll *s, i64 *v, const u64 pos) {
    if (s == NULL)
        return 1;

    if (pos >= s->len)
        return 1;

    if (s->len == 1) {
        *v = s->head->v;
        free(s->head);
        s->head = s->tail = NULL;
        s->len--;
        return 0;
    }

    node *prev = NULL;
    node *curr = s->head;
    u64 i = 0;
    while (i++ < pos) {
        prev = curr;
        curr = curr->next;
    }

    *v = curr->v;
    if (prev != NULL)
        prev->next = curr->next;
    if (curr == s->head)
        s->head = curr->next;
    if (curr == s->tail)
        s->tail = prev;
    free(curr);
    s->len--;
    return 0;
}

i8 sll_remove(sll *s, const i64 v) {
    if (s == NULL)
        return 1;
    if (s->len == 0)
        return 1;
    node *prev = NULL;
    node *curr = s->head;
    while (curr != NULL && curr->v != v) {
        prev = curr;
        curr = curr->next;
    }

    if (curr == NULL)
        return 1;

    if (prev != NULL)
        prev->next = curr->next;
    if (curr == s->head)
        s->head = curr->next;
    if (curr == s->tail)
        s->tail = prev;
    free(curr);
    s->len--;
    return 0;
}

u64 sll_len(const sll *s) {
    return s->len;
}
