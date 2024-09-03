#ifndef LINKED_LIST_KATA_MACHINE
#define LINKED_LIST_KATA_MACHINE

#include "alias.h"

typedef struct node node;
typedef struct sll sll;
typedef struct dll dll;

sll *init_sll();

void free_sll(sll *s);

i8 sll_append(sll *s, const i64 v);

i8 sll_prepend(sll *s, const i64 v);

i8 sll_get(const sll *s, i64 *v, const u64 pos);

i8 sll_remove(sll *s, const i64 v);

i8 sll_remove_at(sll *s, i64 *r, const u64 pos);

u64 sll_len(const sll *s);

#endif
